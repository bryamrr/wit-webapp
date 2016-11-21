class CreateCModules < ActiveRecord::Migration[5.0]
  def change
    create_table :c_modules do |t|
      t.references :course, foreign_key: true
      t.string :title
      t.integer :number

      t.timestamps
    end
  end
end
