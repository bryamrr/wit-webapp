class CreatePlans < ActiveRecord::Migration[5.0]
  def change
    create_table :plans do |t|
      t.string :cta
      t.decimal :pricetag

      t.timestamps
    end
  end
end
