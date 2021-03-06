﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepSpy.Storage.Migrations
{
    public partial class UpdateLastProcessed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("delete from transaction where redeem_id is null and deposit_id is null");
            migrationBuilder.Sql("update network set last_block_processed = 11187370 where Kind = 1 and Is_testnet = false");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
