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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_08_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhyT0d1OWdob3JraUpySXBIMmh5Y1ltL2l6N1g3QnlQS09MMnRvVWZzS3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlhaHI5dEh2UWg2Q09GWE8xbGptTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNmMzkwOGUtYTI4Mi00NzQyLTkyZGMtYjJjOGU2NGIzZTIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDE2NSxcbiAgICAgIDU0LFxuICAgICAgMjI0LFxuICAgICAgMTcyLFxuICAgICAgMjI4LFxuICAgICAgNDUsXG4gICAgICAxNTYsXG4gICAgICAxMTIsXG4gICAgICA4NyxcbiAgICAgIDE3MyxcbiAgICAgIDg0LFxuICAgICAgMjA4LFxuICAgICAgOTIsXG4gICAgICAxNjksXG4gICAgICAyMzAsXG4gICAgICAyMjIsXG4gICAgICAxODgsXG4gICAgICAxMTgsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDEwMyxcbiAgICAgIDEzLFxuICAgICAgOCxcbiAgICAgIDE5MSxcbiAgICAgIDIwLFxuICAgICAgMjQ5LFxuICAgICAgMTg5LFxuICAgICAgNzgsXG4gICAgICA3NixcbiAgICAgIDcsXG4gICAgICAyNDgsXG4gICAgICA1MSxcbiAgICAgIDEzMSxcbiAgICAgIDIxLFxuICAgICAgMjI3LFxuICAgICAgMjM3LFxuICAgICAgMjA4LFxuICAgICAgMTQ3LFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGIrMHI0S0VMdk5tTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1eFBkb2ZlcWx1OHo1UTNLY2NLTGs4aVR4ZC9mVURkRVVPRmVsV0QzdFE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5KVUNkWktEMHE1Nk9RWG5ERjdPN3pVUnlPTHNCQktBeURBc0NmbTZDenRQZVd2VTdQOEtqUy9QMDBpeTIvMXFNRnZLOWxUME5hS3ZmR1Q5bXRmSGdRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImk4bzk1dDhsSURPWUNGaFJrSnI0VEEvdFRVeU9MZGc5bU9iMitrYkFoQ1pxR1FhNk40RDB3Y1BpdkVBNEJFWkl0aE1ZU1ZHYnlyTktmZENEUHFLb0RRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMTM0NjEzOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDE0NzYyNjUwNzA3OTI6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTEzNDYxMzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNjQ5MjZcbn0iCn0="  // PUT your SESSION_ID
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
