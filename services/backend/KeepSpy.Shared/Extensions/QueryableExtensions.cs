using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using KeepSpy.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace KeepSpy.Shared.Extensions
{
    public static class QueryableExtensions
    {
        public static async Task<Paged<T>> ToPagedAsync<T>(this IQueryable<T> query, PagerQuery pagerQuery)
        {
            var page = Math.Clamp(pagerQuery.Page, 1, int.MaxValue);
            var take = Math.Clamp(pagerQuery.Take, 1, 100);
            var skip = take * (page - 1);
            
            var count = await query.CountAsync();
            var items = await query.Skip(skip).Take(take).ToArrayAsync();
            
            return new Paged<T>
            {
                Items = items,
                Pager = new Pager
                {
                    Take = take,
                    Total = count,
                    Pages = (int) Math.Ceiling((decimal) count / (decimal) take),
                    Current = page
                }
            };
        }

        public static IQueryable<T> WhereIf<T>(this IQueryable<T> query, bool condition,
            Expression<Func<T, bool>> predicate)
        {
            return condition ? query.Where(predicate) : query;
        } 
        
    }
}