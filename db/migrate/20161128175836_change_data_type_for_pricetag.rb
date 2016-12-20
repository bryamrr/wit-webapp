class ChangeDataTypeForPricetag < ActiveRecord::Migration[5.0]
  def self.up
      change_table :courses do |t|
        t.change :pricetag, 'decimal USING CAST(pricetag AS numeric)'
      end
    end
    def self.down
      change_table :courses do |t|
        t.change :pricetag, :boolean
      end
    end
end
