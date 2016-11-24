class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start
      t.datetime :end
      t.references :brewery, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
