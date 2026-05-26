import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const { telegram } = await request.json();
    const cleanUsername = telegram.replace('@', '');
    
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Query your Google Sheet for the username
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:B', // Columns A (chatId) and B (username)
    });

    const rows = response.data.values || [];
    
    // Skip header row if exists
    let chatId = null;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][1] === cleanUsername) {
        chatId = rows[i][0];
        break;
      }
    }

    return NextResponse.json({ 
      success: true, 
      chatId: chatId,
      username: cleanUsername 
    });
    
  } catch (error) {
    console.error('Lookup error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to lookup chat ID' 
    }, { status: 500 });
  }
}