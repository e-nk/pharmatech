class CreateMedicines < ActiveRecord::Migration[7.0]
  def change
    create_table :medicines do |t|
      t.string :name
      t.integer :stock_count
      t.date :expiry_date
      t.text :description
      t.text :how_to_use
      t.text :precautions
      t.string :image
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
