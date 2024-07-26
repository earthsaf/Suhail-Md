const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://bryanokechukwu596:<password>@cluster0.hfa2osm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349011346139";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349011346139";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_58_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkMyRERNa1VkK0JQSU1PUXpUczFjY1FleklCcGVERXBGRDZpMTAwU2Y0SXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5tZUtXaVVsU0tDVG9tcHkzUDhscXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWZiY2MzMDEtYjdjMC00YmMwLWJmMWEtODE3ZDZmNTQ3ZDQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDQ1LFxuICAgICAgMzMsXG4gICAgICAxOCxcbiAgICAgIDUsXG4gICAgICAyMTksXG4gICAgICAyLFxuICAgICAgNzUsXG4gICAgICA3NixcbiAgICAgIDgwLFxuICAgICAgMTcxLFxuICAgICAgNTUsXG4gICAgICAxODAsXG4gICAgICAyNDgsXG4gICAgICAxOTAsXG4gICAgICAxMTQsXG4gICAgICAxNDAsXG4gICAgICAxOTUsXG4gICAgICAxMjcsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICA4MixcbiAgICAgIDU1LFxuICAgICAgMTEsXG4gICAgICA4MCxcbiAgICAgIDY5LFxuICAgICAgMTU2LFxuICAgICAgNDgsXG4gICAgICAxOTYsXG4gICAgICA0MyxcbiAgICAgIDQsXG4gICAgICAxNjMsXG4gICAgICAxNjksXG4gICAgICAxNixcbiAgICAgIDc3LFxuICAgICAgMTkxLFxuICAgICAgMjE0LFxuICAgICAgODMsXG4gICAgICAxMzcsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcW92b0FERU1IL2o3VUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIisrMklCSE8wZCtIU2pmNTgxYmsrSktBKzhhNGZ3b2YvMVB2MFRTZDk4Q2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVVQVHpnZmx0aDVSY2M1M2FkRlJVMzh3bEk2UlE2aVRFNDYvcEV3b1NTYlZGRVFFV0JuWTVTSk9iY0x1TXFjS0NHYm1mMTFqY0pKTVZSMTN3MWJZZ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMndURTZ2TVFCMHVBRHpzWVV5ZjNXLzE4Q0FTSkFFVkdxT0JxVXlRTmltbjhKam5Da0pkUmR4Ylk4N1JpSzBLcG4xSTUxa3JGb3JWOXRScDNBL0xBQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDExMzQ2MTM5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MTQ3NjI2NTA3MDc5MjoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMTM0NjEzOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMjM4NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEcStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURxKy5qc29uIjogIntcImtleURhdGFcIjpcIi9HMDhidURmWldJVkhBSFU1ZjdSbWJ5S3Y4b1BnWHY0Z0paaEppNUhQaVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODA2MzI3MzA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwMjI5NjI3MzRcIn0iCn0="  // PUT your SESSION_ID 

module.exports = {
  
  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "bryan-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
