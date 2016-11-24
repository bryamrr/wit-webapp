class CreateCmodules < ActiveRecord::Migration[5.0]
  def change
    create_table :cmodules do |t|
      t.references :course, foreign_key: true
      t.string :title
      t.integer :number

      t.timestamps
    end
  end
end
