class CreateMessengers < ActiveRecord::Migration[7.0]
  def change
    create_table :messengers do |t|
      t.string :title
      t.references :message, null: false, foreign_key: true

      t.timestamps
    end
  end
end
