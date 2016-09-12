# FTP Deploy script #
puts "Init deploy"
user="haletwtc"
# Z5ZgrU1iFON25
app_directory = File.expand_path("..")
command = "scp -v -r -P 21098 #{app_directory} #{user}@halematsenwedding.com:~/public_html/"
response = `#{command}`
if !response.nil?
  puts "Upload finished @ #{Time.new}"
end

