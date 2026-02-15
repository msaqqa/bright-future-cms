const { Client } = require('pg')
require('dotenv').config()

// تأكد أن DATABASE_URI هو الاسم المستخدم في ملف .env لديك
const client = new Client({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
})

async function clean() {
  try {
    await client.connect()
    console.log('Connected to DB...')

    // حذف الجداول المسببة للمشاكل
    await client.query(`
      DROP TABLE IF EXISTS "home_page_latest_news" CASCADE;
      DELETE FROM "_payload_migrations" WHERE name LIKE '%latest_news%';
    `)

    console.log('Tables dropped successfully!')
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await client.end()
  }
}

clean()
