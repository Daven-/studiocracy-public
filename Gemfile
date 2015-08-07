source 'https://rubygems.org'
ruby '2.2.2'

# Standard Rails gems
gem 'rails', '4.2.3'
gem 'sass-rails', '5.0.3'
gem 'uglifier', '2.7.1'
gem 'coffee-rails', '4.1.0'
gem 'jquery-rails', '4.0.4'
gem 'turbolinks', '2.5.3'
gem 'jquery-turbolinks', '2.1.0'
gem 'jbuilder', '2.3.1'
gem 'bcrypt', '3.1.10'
gem 'compass-rails', '2.0.2'
# Required for testing
gem 'rspec'

#stripe
gem 'stripe', :git => 'https://github.com/stripe/stripe-ruby'

#oauth for logging in w/ stripe, facebook
gem 'omniauth'
gem 'omniauth-facebook'
gem 'oauth2'
gem 'omniauth-stripe-connect'

# Kaminari: https://github.com/amatsuda/kaminari
gem 'kaminari'

# Friendly_id: https://github.com/norman/friendly_id
gem 'friendly_id', '5.1.0'

# Font-awesome: https://github.com/FortAwesome/font-awesome-sass
gem 'font-awesome-sass', '4.3.1'

# Bootstrap 3: https://github.com/twbs/bootstrap-sass
gem 'bootstrap-sass', '3.3.3'

group :development, :test do
  gem 'byebug', '3.5.1'
  gem 'web-console', '2.1.3'

  # Figaro: https://github.com/laserlemon/figaro
  gem 'figaro', '1.1.0'

  # Spring: https://github.com/rails/spring
  gem 'spring', '1.3.3'
end


# SQLite 3
group :development, :test do
  gem 'sqlite3', '1.3.10'
end

# Devise: https://github.com/plataformatec/devise
gem 'devise', '3.4.1'

# Redcarpet: https://github.com/vmg/redcarpet
gem 'redcarpet', '3.2.3'

# Rails 12factor for Heroku: https://github.com/heroku/rails_12factor
gem 'rails_12factor', group: :production

# PostgreSQL
group :production do
  gem 'pg'
end

# Puma:
gem 'puma'

#Paperclip - for multimedia uploads, esp. images
gem "paperclip", "~> 4.2.2"

#elasticsearch - in-site search engine
gem 'elasticsearch', git: 'git://github.com/elasticsearch/elasticsearch-ruby.git'

# Infinite scrolling + pagination gems
#gem 'will_paginate', '~> 3.0.5'
#gem 'bootstrap-will_paginate', '~> 0.0.10'
gem 'jquery-infinite-pages'

# Threaded comments, votables
gem 'acts_as_commentable_with_threading'
gem 'acts_as_votable'

group :development, :test do
gem 'foreman'
end

#mailboxer for private inboxes
gem 'mailboxer'

# jQuery plug-in for selecting from lists
gem 'chosen-rails'
