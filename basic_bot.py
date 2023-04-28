import discord
from dotenv import load_dotenv
import os
load_dotenv()

bot = discord.Bot()

@bot.event
async def on_ready():
    print(f"We have logged in as {bot.user}")

@bot.slash_command(guild_ids=[796132801086750751])
async def hello(ctx):
    await ctx.respond("Hello yrself!")



bot.run(os.getenv("DISCORD_TOKEN"))


