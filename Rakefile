require 'rubygems'
require 'crxmake'

desc 'make chrome extension'
task 'crxmake' do
  # create crx
  CrxMake.make(
               :ex_dir => "./src",
               #:pkey   => "./src.pem",
               :crx_output => "./package/test.crx",
               :verbose => true,
               :ignorefile => /\.swp/,
               :ignoredir => /\.(?:svn|git|cvs)/
               )
  
  # create zip for Google Extension Gallery
  CrxMake.zip(
              :ex_dir => "./src",
              #:pkey   => "./src.pem",
              :zip_output => "./package/test.zip",
              :verbose => true,
              :ignorefile => /\.swp/,
              :ignoredir => /\.(?:svn|git|cvs)/
              )
end

task :default => [:crxmake]
