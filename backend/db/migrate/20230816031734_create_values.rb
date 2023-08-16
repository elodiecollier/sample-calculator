class CreateValues < ActiveRecord::Migration[7.0]
  def change
    create_table :values do |t|
      t.decimal :original
      t.decimal :calculated

      t.timestamps
    end
  end
end
