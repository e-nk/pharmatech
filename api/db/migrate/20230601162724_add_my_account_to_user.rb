class AddMyAccountToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :my_account, foreign_key: true
  end
end
