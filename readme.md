# ACM Design Styleguide

## Running it locally
* Install [Ruby](https://www.ruby-lang.org/en/downloads/) and [RubyGems](https://rubygems.org/pages/download)
* Verify `gcc` and `make` are on your system
  * You can do this by running the commands `gcc -v` and `make -v`
* Use RubyGems to install bundler to take care of dependencies
  * Run the command `gem install bundler`
    * May need to use `sudo gem install bundler`
* Run command `bundle exec jekyll serve` and go to [localhost:4000](http://localhost:4000/)
* For Windows 10 users using Bash on Ubuntu for Windows, run `bundle exec jekyll serve --no-watch` because Windows does not have hot reloading

## Troubleshooting
* If you are on OSX and you need a newer version of Ruby, open your terminal and run `\curl -sSL https://get.rvm.io | bash -s stable`
* Restart your terminal and run command `rvm list known` and this will show the versions of Ruby
* Run `rvm install ruby-2.4.1` or whatever is the newest version number
* Run `ruby -v` to check the version
  * If it says `ruby 2.0` then run the command `rvm use ruby-2.4.1`
  * If you want to set it as default version, run `rvm use ruby-2.4.1 --default`
