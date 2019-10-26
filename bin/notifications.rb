#!/usr/bin/env ruby

while true
  notification = [
    "this is getting real",
    "time for a break",
    "you got email",
  ].sample
  title = %w[Bitcoin Drinks Cake Slack].sample
  subtitle = ["up 🔼", "down 🔽", "drinks 🍺🍹🍷🍸"].sample
  sound = %w[Basso Blow Frog Funk Glass Hero Ping Purr Sosumi Submarine].sample

  command = [
    "display notification",
    "\"#{notification}\"",
    "with title",
    "\"#{title}\"",
    "subtitle",
    "\"#{subtitle}\"",
    "sound name",
    "\"#{sound}\"",
  ].join(" ")

  system "osascript -e '#{command}'"

  sleep rand(1..3)
end
