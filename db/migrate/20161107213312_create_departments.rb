class CreateDepartments < ActiveRecord::Migration[5.0]
  def change
    create_table :departments do |t|
      t.string :name
      t.references :country, foreign_key: true

      t.timestamps
    end
  end
end
