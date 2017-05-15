class CreateRemoveNullConstraintFromFNameLNameInUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.change :first_name, null: true
      t.change :last_name, null: true
    end
  end
end
