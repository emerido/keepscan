using System;
using KeepSpy.Domain;

namespace KeepSpy.Models
{
    public class RedeemDto
    {
        public string Id { get; set; }
        public RedeemStatus Status { get; set; }
        public string DepositId { get; set; }
        public DateTime CreatedAt { get; set; }
        public string SenderAddress { get; set; }
        public string? BitcoinAddress { get; set; }
        public decimal? BtcRedeemed { get; set; }
        public decimal? BtcFee { get; set; }
        public decimal? LotSize { get; set; }
        public uint? BitcoinRedeemedBlock { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? CompletedAt { get; set; }

        public RedeemTxDto[] Transactions { get; set; }
    }
}