# config/initializers/firebase.rb

require 'firebase_admin'

FirebaseAdmin.configure do |config|
  config.project_id = 'pharmatech-solutions'
  config.database_url = 'YOUR_FIREBASE_DATABASE_URL'
  config.credentials = 'path/to/your/service_account_key.json'
end
