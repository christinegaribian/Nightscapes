class MakeBioDefaultToEmptyString < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :bio, :text, :default => ""
  end
end
