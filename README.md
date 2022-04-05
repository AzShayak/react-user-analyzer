This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### App demo

Working application is available at the link below.\
[Live application demo](https://azshayak.github.io/react-user-analyzer/)

### Demonstration video

Working application's demonstration is available in Google Drive.\
[Demonstration video](https://drive.google.com/file/d/1V0yMwr2TCiTEfLgwj4r-cOjPhjIx-_3t/view?usp=sharing)

### Setup and run

_Node JS is required to run the application_

-   Open a terminal in the root folder
-   Type `npm i` and hit <kbd>Enter</kbd> to install all dependencies
-   After install finishes, type `npm start` and hit <kbd>Enter</kbd> to run the application

### Screens

1. Select Filters
2. Show Users
3. Edit Filters
4. Show Individual User

### Filter Function Implementation

I have implemented the filter user and search user functionality. I noticed that the `calendar.dateToDayId` had the `dayId` in numeric value and the `dayId` increased with the date. So used a `for/in` loop to find the `firstDayId` and `lastDayId` that comes within the filter dates. Then I used `for/in` again to count the number of meals from `calendar.mealIdToDayId`. To verify the results I have counted the meals of 5 random users manually and compared it with the filter's result and I found that the filter gave accurate results in these 5 cases.
