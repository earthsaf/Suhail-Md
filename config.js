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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_55_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOVhpN3NsbGJKSlhkMjJqUklhMFpxZmlHQThBaTZFWUN5aE5zN2NQS0w5TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTlczZzQ3Qk5SYkNZUkxaMkZGdzZOd1wiLFxuICBcInBob25lSWRcIjogXCJlMDBjODBmMi1jNDRjLTQyN2UtYTZmYi0zZTIzOTFkYzI1OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMjI0LFxuICAgICAgNzMsXG4gICAgICA1MCxcbiAgICAgIDM4LFxuICAgICAgOTYsXG4gICAgICAyNDgsXG4gICAgICA5NSxcbiAgICAgIDU3LFxuICAgICAgNzUsXG4gICAgICAxNTgsXG4gICAgICA2MCxcbiAgICAgIDI0MSxcbiAgICAgIDE0OCxcbiAgICAgIDMzLFxuICAgICAgMjMsXG4gICAgICAyNSxcbiAgICAgIDk5LFxuICAgICAgMTAzLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxODcsXG4gICAgICAyMjIsXG4gICAgICAzMixcbiAgICAgIDE3OCxcbiAgICAgIDEzMixcbiAgICAgIDI0MixcbiAgICAgIDEwNCxcbiAgICAgIDQyLFxuICAgICAgMjUwLFxuICAgICAgMTY2LFxuICAgICAgNDcsXG4gICAgICAxODQsXG4gICAgICA3LFxuICAgICAgOTYsXG4gICAgICAxOTIsXG4gICAgICAyMjMsXG4gICAgICAyMyxcbiAgICAgIDEzNSxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pQTErZ0tFUDJOajdVR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib3Y2VC85MEJ3bXdocGhvY0tJWjZIN3JmdDFnQ24rbXhiVlFiaEIrVHJ3ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEVGxQY3B4MGhuWlo4NXFZdHpWNTEzZ01zNndlcDY5ek05ZVR0cUdWKzB4ZXkvVjMyTGZaNTM2ditCQldPQk1RWHRVU0tnMWJZeW9EUG4zVmZqZFJndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2ZEtQallhUm1LWW1YVTdqS25ndkJyc2w1MjdMTnpGNzgvaUcrMTFsTXE2YVdFSFdPaVhLbWdtOXZTVWY3cjNoSmI0dmVveHgzcnNEZGpRYmlPR2FEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTEzNDYxMzk6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MTQ3NjI2NTA3MDc5Mjo5NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTEzNDYxMzk6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAwOTM0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpqclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmppLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmkzUXphUm9FekluTWNjcE5XRzlLd1krTW5LUjEvSHZub1RoWjRiaGtyWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTAzODgzODY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NDQ1OTkzNjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKamsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOWmpVektHcVZudmFqYnlxUUdHdlN3bjY4aitHVEw2c0YyOUFTTDBpVTJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MDM4ODM4NjQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNTYxNjQxNjYyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmptLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVdyVHk2Q05kVFU1dFU2b3dRNVlON3dPMFpWRFVROUdYdFB6WUMrbndJTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTAzODgzODY0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbNCwwLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDU2MjM3MjE4N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpqby5qc29uIjogIntcImtleURhdGFcIjpcImUvZTVYOCtLY2NzbldoNVdMY1dlbncvVkJJN0hQajhYdDVRVzU1R3JnVGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkwMzg4Mzg2NCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzUsMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NjMwNTcwMTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKanAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTbmZEb2ZjVXEvOUxIcWtvM2NUb1psR2FtUzJmRXhmMkVkWFg3SHp2c3JFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MDM4ODM4NjQsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYzNzg1NDYxNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpqci5qc29uIjogIntcImtleURhdGFcIjpcIlo2U1dlNlRxLzBIWndpSjc5UDlKSlFaQ0p3TG9NTUdiRStvaGczb0pFVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkwMzg4Mzg2NCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5NzU0MjAxMDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKanMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRb3FpamlXbU9sL2FQQ2ZrRjNaMFJ3MHAvZnBEd01ZRHNYQ3JyUkN5dEM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MDM4ODM4NjQsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTk3NTQyMTQzNFwifSIKfQ=="  // PUT your SESSION_ID 


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
