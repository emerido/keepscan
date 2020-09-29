﻿// <auto-generated />
using System;
using KeepSpy.Storage;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace KeepSpy.Storage.Migrations
{
    [DbContext(typeof(KeepSpyContext))]
    [Migration("20200929151818_AddTransactionRedeemStatus")]
    partial class AddTransactionRedeemStatus
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("KeepSpy.Domain.Contract", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnName("id")
                        .HasColumnType("text");

                    b.Property<bool>("Active")
                        .HasColumnName("active")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("name")
                        .HasColumnType("text");

                    b.Property<Guid>("NetworkId")
                        .HasColumnName("network_id")
                        .HasColumnType("uuid");

                    b.HasKey("Id")
                        .HasName("pk_contract");

                    b.HasIndex("NetworkId")
                        .HasName("ix_contract_network_id");

                    b.ToTable("contract");

                    b.HasData(
                        new
                        {
                            Id = "0x4CEE725584e38413603373C9D5df593a33560293",
                            Active = true,
                            Name = "Deposit Factory",
                            NetworkId = new Guid("bf9c69d8-7fb5-4287-a41c-4d74ef7fea80")
                        });
                });

            modelBuilder.Entity("KeepSpy.Domain.Deposit", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnName("id")
                        .HasColumnType("text");

                    b.Property<string>("BitcoinAddress")
                        .HasColumnName("bitcoin_address")
                        .HasColumnType("text");

                    b.Property<long?>("BitcoinFundedBlock")
                        .HasColumnName("bitcoin_funded_block")
                        .HasColumnType("bigint");

                    b.Property<decimal?>("BtcFunded")
                        .HasColumnName("btc_funded")
                        .HasColumnType("numeric");

                    b.Property<DateTime?>("CompletedAt")
                        .HasColumnName("completed_at")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("ContractId")
                        .IsRequired()
                        .HasColumnName("contract_id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnName("created_at")
                        .HasColumnType("timestamp without time zone");

                    b.Property<decimal?>("LotSize")
                        .HasColumnName("lot_size")
                        .HasColumnType("numeric");

                    b.Property<decimal?>("LotSizeFee")
                        .HasColumnName("lot_size_fee")
                        .HasColumnType("numeric");

                    b.Property<decimal?>("LotSizeMinted")
                        .HasColumnName("lot_size_minted")
                        .HasColumnType("numeric");

                    b.Property<string>("SenderAddress")
                        .IsRequired()
                        .HasColumnName("sender_address")
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnName("status")
                        .HasColumnType("integer");

                    b.Property<string>("TokenID")
                        .HasColumnName("token_id")
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnName("updated_at")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id")
                        .HasName("pk_deposit");

                    b.HasIndex("ContractId")
                        .HasName("ix_deposit_contract_id");

                    b.ToTable("deposit");
                });

            modelBuilder.Entity("KeepSpy.Domain.Network", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id")
                        .HasColumnType("uuid");

                    b.Property<bool>("IsTestnet")
                        .HasColumnName("is_testnet")
                        .HasColumnType("boolean");

                    b.Property<int>("Kind")
                        .HasColumnName("kind")
                        .HasColumnType("integer");

                    b.Property<long>("LastBlock")
                        .HasColumnName("last_block")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("LastBlockAt")
                        .HasColumnName("last_block_at")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("name")
                        .HasColumnType("text");

                    b.HasKey("Id")
                        .HasName("pk_network");

                    b.ToTable("network");

                    b.HasData(
                        new
                        {
                            Id = new Guid("bf9c69d8-7fb5-4287-a41c-4d74ef7fea80"),
                            IsTestnet = true,
                            Kind = 1,
                            LastBlock = 8594983L,
                            LastBlockAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Ropsten"
                        },
                        new
                        {
                            Id = new Guid("ed3664ed-5911-403d-870a-a60491abb660"),
                            IsTestnet = true,
                            Kind = 0,
                            LastBlock = 0L,
                            LastBlockAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Bitcoin Testnet"
                        });
                });

            modelBuilder.Entity("KeepSpy.Domain.Redeem", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnName("id")
                        .HasColumnType("text");

                    b.Property<string>("BitcoinAddress")
                        .HasColumnName("bitcoin_address")
                        .HasColumnType("text");

                    b.Property<long?>("BitcoinRedeemedBlock")
                        .HasColumnName("bitcoin_redeemed_block")
                        .HasColumnType("bigint");

                    b.Property<decimal?>("BtcFee")
                        .HasColumnName("btc_fee")
                        .HasColumnType("numeric");

                    b.Property<decimal?>("BtcRedeemed")
                        .HasColumnName("btc_redeemed")
                        .HasColumnType("numeric");

                    b.Property<DateTime?>("CompletedAt")
                        .HasColumnName("completed_at")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnName("created_at")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("DepositId")
                        .IsRequired()
                        .HasColumnName("deposit_id")
                        .HasColumnType("text");

                    b.Property<string>("SenderAddress")
                        .IsRequired()
                        .HasColumnName("sender_address")
                        .HasColumnType("text");

                    b.Property<int>("Status")
                        .HasColumnName("status")
                        .HasColumnType("integer");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnName("updated_at")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id")
                        .HasName("pk_redeem");

                    b.HasIndex("DepositId")
                        .HasName("ix_redeem_deposit_id");

                    b.ToTable("redeem");
                });

            modelBuilder.Entity("KeepSpy.Domain.Transaction", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnName("id")
                        .HasColumnType("text");

                    b.Property<decimal>("Amount")
                        .HasColumnName("amount")
                        .HasColumnType("numeric");

                    b.Property<long>("Block")
                        .HasColumnName("block")
                        .HasColumnType("bigint");

                    b.Property<string>("DepositId")
                        .HasColumnName("deposit_id")
                        .HasColumnType("text");

                    b.Property<string>("Error")
                        .IsRequired()
                        .HasColumnName("error")
                        .HasColumnType("text");

                    b.Property<decimal>("Fee")
                        .HasColumnName("fee")
                        .HasColumnType("numeric");

                    b.Property<bool>("IsError")
                        .HasColumnName("is_error")
                        .HasColumnType("boolean");

                    b.Property<string>("RedeemId")
                        .HasColumnName("redeem_id")
                        .HasColumnType("text");

                    b.Property<int?>("RedeemStatus")
                        .HasColumnName("redeem_status")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnName("status")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnName("timestamp")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id")
                        .HasName("pk_transaction");

                    b.HasIndex("DepositId")
                        .HasName("ix_transaction_deposit_id");

                    b.HasIndex("RedeemId")
                        .HasName("ix_transaction_redeem_id");

                    b.ToTable("transaction");
                });

            modelBuilder.Entity("KeepSpy.Domain.Contract", b =>
                {
                    b.HasOne("KeepSpy.Domain.Network", "Network")
                        .WithMany()
                        .HasForeignKey("NetworkId")
                        .HasConstraintName("fk_contract_network_network_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("KeepSpy.Domain.Deposit", b =>
                {
                    b.HasOne("KeepSpy.Domain.Contract", "Contract")
                        .WithMany()
                        .HasForeignKey("ContractId")
                        .HasConstraintName("fk_deposit_contract_contract_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("KeepSpy.Domain.Redeem", b =>
                {
                    b.HasOne("KeepSpy.Domain.Deposit", "Deposit")
                        .WithMany()
                        .HasForeignKey("DepositId")
                        .HasConstraintName("fk_redeem_deposit_deposit_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("KeepSpy.Domain.Transaction", b =>
                {
                    b.HasOne("KeepSpy.Domain.Deposit", "Deposit")
                        .WithMany("Transactions")
                        .HasForeignKey("DepositId")
                        .HasConstraintName("fk_transaction_deposit_deposit_id");

                    b.HasOne("KeepSpy.Domain.Redeem", "Redeem")
                        .WithMany()
                        .HasForeignKey("RedeemId")
                        .HasConstraintName("fk_transaction_redeem_redeem_id");
                });
#pragma warning restore 612, 618
        }
    }
}
