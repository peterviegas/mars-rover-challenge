# mars-rover-challenge
#### You are working in an Engineering Squad for the 🎶 Melody Mars Mission, tasked with designing software to manage robots 🤖 and cool vehicles for space exploration!
#### The surface of Mars is represented by a Plateau, you can make the assumption that the Plateau is a square/rectangular grid for the purpose of this task.
#### Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms 🦾 to collect samples back to Planet Earth 🌏

## Representation of a Rover’s Position on the Plateau
#### The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four cardinal compass points) respectively.

### Example
#### 0 0 N
#### This means the Rover is at the bottom-left corner facing in the North direction.
#### .B. Assume that the square directly North from (x, y) is (x, y+1), and the square directly
#### East from (x, y) is (x + 1, y)

## Instructing a Rover to Move Around the Plateau 💻 To move a Rover around the Plateau, a string of letters is sent to a Rover.
#### Here are the letters and their resultant action:

## Letter Action
+ L Spins the Rover 90 degrees Left without moving from the current coordinate point
+ R Spins the Rover 90 degrees Right without moving from the current coordinate point
+ M Moves the Rover forward by one grid point, maintaining the same heading/orientation

## Inputs into the Program
#### First Line of Input to the Program
#### The first line inputted into the program represents the upper-right coordinates of the Plateau.

+ 5 5 This Plateau has maximum (x, y) co-ordinates of (5, 5).
#### N.B. Assume that the lower-left coordinate is (0, 0).

## Subsequent Lines of Input into the Program - Input to Rovers
#### This represents the instructions to move the rovers.
#### Each rover receives two lines of input.

## First Line of Input to a Rover
#### The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation).
+ 1 2 N

## Second Line of Input to a Rover
#### A string of letters representing the instructions to move the Rover around the Plateau.

## Movement Rules

#### Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

## Output
#### For each Rover, the output represents its final position (final coordinates and where it is facing).

## Example Test Case

#### Lines of Input to the Program:
+ 5 5

+ 1 2 N
+ LMLMLMLMM

+ 3 3 E
+ MMRMMRMRRM

#### Expected Output:
+ 1 3 N
+ 5 1 E

## For the construction of the project, it was thought of dividing it into smaller parts with navigation based on Alice's project (Wonderland)
### A menu was created with 5 instructions for navigation and user interaction
+ Execute o TDD (Example of the two test)
+ Send movement to drone and receive position (staring point for this test is base 0,0)
+ Submit position and instructions. You get the actual position.
+ Return drone to base. Send the actual localization and receive one possible instructons to return.
+ Abort the mission (Exit tests)

#### To run the project in interactive mode, the npm start command must be given.

## TDD (Test Drive Developer)
### Separate test functionalities were created in:
+ Situations for collision in North, South, East and West coordinates;
+ Validation of 90 degree orientation change in North, South, East and West coordinates when receiving right and left instructions;
+ Validation of instructions of moving and direction;
+ Validadion of movement receiving instructions;
+ Validation creat of Plateau and space overflow;
+ Validation over coordenate;
+ Validation parameters of position.

#### To run TDD, enter the command line and type npm test.
