# Playing with TP-Link Smartbulb KL-130

It appears the smart bulbs can be controlled from any custom app.

This project shows some commands and how to send them from the Node.js app.

# Inconveniences with the Kasa app

We were happy to get smart bulbs where we can change colors and brightness in each bedroom.

1) Imagine this scenario:
    - The kid's lamp is paired with their phone.
    - Yesterday, they set the lamp to 10% brightness.
    - Now, we want to turn the lamp to full brightness. But no, it is not possible.
    - It turns out the lamp listens only to the phone that WAS paired with it.
    - **WISH #1**: I want any mobile app to control any smart bulb if they are on the
      **same Wi-Fi network**. The there is no need for cloud account in this case.
    - **WISH #2**: Three has to be some way to reset the lamp to **white
      color, 100% brightness** without controlling app. Maybe quick several
      turn on/off repeats on the wall switch?..

2) Imagine this scenario:
    - Reading a book in bed and deciding it is time to sleep.
    - Getting my smartphone to turn off the light without standing up from bed.
    - Unlock the phone with the passcode and find the Kasa app icon.
    - And...I am logged out of my Kasa account. The app was installed and
      registered several weeks ago. Why doesn't the app keep me in?!!
    - Ok, whatever. Entering email, password... ha?.. wrong password as
      I forgot what was entered in the past during registration.
    - Ok...trying to recover the password.
    - Oh, come on! Standing up from bed and turning the lamp switch off.
    - **WISH**: There is NO REASON to auto log out on personal mobile device.
