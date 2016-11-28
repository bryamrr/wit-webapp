class ChangeDataTypeForPricetag < ActiveRecord::Migration[5.0]
  def self.up
      change_table :courses do |t|
        t.change :pricetag, :decimal
      end
    end
    def self.down
      change_table :courses do |t|
        t.change :pricetag, :boolean
      end
    end
end
