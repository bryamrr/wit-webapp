class CreateTokens < ActiveRecord::Migration[5.0]
  def change
    create_table :tokens do |t|
      t.references :user, foreign_key: true
      t.string :token
      t.datetime :expires_at

      t.timestamps
    end
  end
end
