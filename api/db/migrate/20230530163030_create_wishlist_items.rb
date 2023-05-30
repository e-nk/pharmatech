class CreateWishlistItems < ActiveRecord::Migration[7.0]
  def change
    create_table :wishlist_items do |t|
      t.string :user_id
      t.references :medicine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
