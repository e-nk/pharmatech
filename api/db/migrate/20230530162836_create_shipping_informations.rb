class CreateShippingInformations < ActiveRecord::Migration[7.0]
  def change
    create_table :shipping_informations do |t|
      t.string :phone_number
      t.string :address
      t.string :user_id

      t.timestamps
    end
  end
end
