using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeepSpy.App.Models;
using KeepSpy.Domain;
using KeepSpy.Storage;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KeepSpy.App.Controllers
{
    [Route("api/[controller]")]
    public class StatisticController
    {
        private readonly KeepSpyContext _db;

        public StatisticController(KeepSpyContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<StatisticsDto> Get()
        {
            var totalMinted = await _db.Set<Deposit>()
                // TODO: Add status redeemed
                .Where(x => (x.Status == DepositStatus.Minted || x.Status == DepositStatus.Redeemed) &&
                            x.LotSize != null)
                .Select(x => x.LotSize!.Value)
                .SumAsync();

            var totalSupply = await _db.Set<Deposit>()
                .Where(x => x.Status == DepositStatus.Minted && x.LotSize != null)
                .Select(x => x.LotSize!.Value)
                .SumAsync();

            return new StatisticsDto
            {
                TotalMinted = totalMinted,
                TotalSupply = totalSupply,
                SupplyCap = 250m
            };
        }

        [HttpGet("deposits")]
        public ActionResult<IEnumerable<DepositStat>> DepositStats()
            => Enumerable.Range(-9, 10).Select(i =>
            {
                var date = DateTime.Today.AddDays(i);
                var query = _db.Set<Deposit>()
                    .Where(o => o.Contract.Active && o.LotSizeMinted.HasValue &&
                                o.CompletedAt.Value.Date == date);
                
                return new DepositStat
                {
                    Date = date,
                    Count = query.Count(),
                    Volume = query.Sum(o => o.LotSize.Value)
                };
            }).ToList();
    }
}