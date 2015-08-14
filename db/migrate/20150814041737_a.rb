class A < ActiveRecord::Migration
  change_table :users do |t|
    t.boolean :accepts_commissions, null: false, default: false
  end
end
