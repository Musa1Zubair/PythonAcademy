import random

def attack_guardian():
    print("\nThe Python Guardian challenges you!")
    print("You must solve coding challenges to defeat it!")
    guardian_hp = 100
    
    while guardian_hp > 0:
        print(f"\nGuardian HP: {guardian_hp}")
        print("Choose your attack:")
        print("1. Basic Attack (Variables & Printing) - 10 damage")
        print("2. Special Attack (Loops & Conditionals) - 20 damage")
        print("3. Ultimate Attack (Functions) - 40 damage")
        choice = input("Enter 1, 2, or 3: ")
        
        if choice == "1":
            answer = input("What will this print? print(\"Python Battle!\")\nYour answer: ")
            if answer.strip().lower() == "python battle!":
                print("Correct! You dealt 10 damage!")
                guardian_hp -= 10
            else:
                print("Wrong! The Guardian grows stronger!")
                guardian_hp += 5
                
        elif choice == "2":
            answer = input("Fill in the missing part: for i in range(___): print('Attack!')\nYour answer: ")
            if answer.strip() == "5":
                print("Great! You hit the Guardian 20 times!")
                guardian_hp -= 20
            else:
                print("Incorrect! The Guardian regains health!")
                guardian_hp += 10
                
        elif choice == "3":
            print("To use your Ultimate Attack, write a function that returns 'Victory!'")
            answer = input("Your function (def battle(): return _____): ")
            if "victory" in answer.strip().lower():
                print("Amazing! Your function worked! 40 damage!")
                guardian_hp -= 40
            else:
                print("Oops! The Guardian is still standing!")
                guardian_hp += 15
        else:
            print("Invalid choice. The Guardian gains 5 HP!")
            guardian_hp += 5
        
        if guardian_hp <= 0:
            print("\nCongratulations! You defeated the Python Guardian and completed your training!")
        elif guardian_hp >= 150:
            print("The Guardian has become too powerful! You must retreat and train more!")
            break

attack_guardian()
