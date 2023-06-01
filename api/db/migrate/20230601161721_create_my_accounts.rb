class CreateMyAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :my_accounts do |t|
      t.string :full_name
      t.string :phone_number
      t.string :email
      t.string :gender
      t.date :date_of_birth
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
