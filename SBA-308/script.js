// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // #1: declare and initialize function scope variables
  const result = []; // array that stores the reuslt value
  const studentScores = {}; // object that stores the student scores - learner scorers

  // #2: try/catch to get error for the whole function
  try {
    // #3: for of loop to initialize Learner Submissions scores
    for (const submitted of submissions) {
      // #4: declare and initialize for of block scope variables
      const studentId = submitted.learner_id;
      const assignmentID = submitted.assignment_id;
      //   const studentScore = submitted.submission.score;
      const studentScore = Number(submitted.submission.score); // score should always be a number

      //   #5: check if the student score is not less than zero
      if (studentScore < 0) {
        throw `Error — The student with ID ${studentId}, has score is ${studentScore} on assignment ID ${assignmentID} which is less than zero. Verify.`;
      }

      //   #6: check if there's an entry
      if (!studentScores[studentId]) {
        studentScores[studentId] = {
          id: studentId,
          totalScore: 0,
          pointPossible: 0,
          1: 0,
          2: 0,
          //   scores: {},
        };
      }

      //   #7: now search through all the assignments group and find a match
      //   for that given assignment id
      let assignment;
      for (let i = 0; ag.assignments.length; i++) {
        // #8: check if the AssignmentGroup's assignments ID at a certain position is the same as
        // the LearnerSubmissions assignment ID
        if (ag.assignments[i] === assignmentID) {
          // assignment found
          assignment = ag.assignments[i];
          // #9: now, since we have the assignment break  and exit the loop
          break;
        } else if (!assignment) {
          throw `Error - Assignment with ID ${assignmentID} for student id ${studentId} is not found.`;
        }
      }


      
    }
  } catch (err) {
    console.error(`Error — ${err}`);
  }

  // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0, // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833, // late: (140 - 15) / 150
  //     },
  //   ];

  //   return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
