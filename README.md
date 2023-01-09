# mars-rover-challenge
You are working in an Engineering Squad for the 🎶 Melody Mars Mission, tasked with designing software to manage robots 🤖 and cool vehicles for space exploration!
The surface of Mars is represented by a Plateau, you can make the assumption that the
Plateau is a square/rectangular grid for the purpose of this task.
Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms
🦾 to collect samples back to Planet Earth 🌏

Representation of a Rover’s Position on the Plateau
The Plateau is divided into a grid. A Rover’s position is represented by x and y
co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four
cardinal compass points) respectively.

Example
0 0 N
This means the Rover is at the bottom-left corner facing in the North direction.
N.B. Assume that the square directly North from (x, y) is (x, y+1), and the square directly
East from (x, y) is (x + 1, y)

Instructing a Rover to Move Around the Plateau
💻 To move a Rover around the Plateau, a string of letters is sent to a Rover.
Here are the letters and their resultant action:

Letter Action

L Spins the Rover 90 degrees Left without
moving from the current coordinate point

R Spins the Rover 90 degrees Right
without moving from the current
coordinate point

M Moves the Rover forward by one grid
point, maintaining the same
heading/orientation

Inputs into the Program
First Line of Input to the Program
The first line inputted into the program represents the upper-right coordinates of the
Plateau.

5 5
This Plateau has maximum (x, y) co-ordinates of (5, 5).
N.B. Assume that the lower-left coordinate is (0, 0).

Subsequent Lines of Input into the Program - Input to Rovers
This represents the instructions to move the rovers.
Each rover receives two lines of input.

First Line of Input to a Rover
The Rover’s position is represented by two integers representing the X and Y
coordinates and a letter representing where the Rover is facing (its orientation).
1 2 N

Second Line of Input to a Rover
A string of letters representing the instructions to move the Rover around the Plateau.

Movement Rules

Rovers move sequentially, this means that the first Rover needs to finish moving first
before the next one can move.

Output
For each Rover, the output represents its final position (final coordinates and where it is
facing).
