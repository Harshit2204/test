let questions = [
  {
    id: 1,
    question: "How do you prefer to communicate with your audience?",
    options: [
      {
        text: "Engaging in meaningful conversations and building relationships",
        points: 4
      },
      {
        text: "Crafting compelling written content and storytelling",
        points: 2
      },
      {
        text: "Creating visually appealing and captivating multimedia content",
        points: 3
      },
      {
        text: "Delivering concise and informative messages",
        points: 1
      }
    ]
  },
  {
    id: 2,
    question: "What is your preferred method of gathering customer insights?",
    options: [
      {
        text: "Conducting interviews, surveys, and gathering feedback",
        points: 3
      },
      {
        text: "Analyzing data and metrics to understand customer behavior",
        points: 1
      },
      {
        text: "Observing and interpreting customer interactions and responses",
        points: 4
      },
      {
        text: "Analyzing market trends and competitor analysis",
        points: 2
      }
    ]
  },
  {
    id: 3,
    question: "How do you approach building brand awareness?",
    options: [
      {
        text: "Connecting with influencers and leveraging their audience",
        points: 2
      },
      {
        text: "Creating informative and educational content",
        points: 1
      },
      {
        text: "Showcasing visually appealing content and creative campaigns",
        points: 3
      },
      {
        text: "Engaging with the community and fostering brand loyalty",
        points: 4
      }
    ]
  },
  {
    id: 4,
    question: "How do you measure the success of your marketing efforts?",
    options: [
      {
        text: "Analyzing data and metrics to track key performance indicators",
        points: 1
      },
      {
        text: "Monitoring engagement, comments, and customer feedback",
        points: 4
      },
      {
        text: "Assessing the impact on brand reputation and customer perception",
        points: 3
      },
      {
        text: "Evaluating lead generation, conversion rates, and sales metrics",
        points: 2
      }
    ]
  },
  {
    id: 5,
    question: "What is your preferred approach to targeting your audience?",
    options: [
      {
        text: "Building customer personas and creating targeted content",
        points: 2
      },
      {
        text: "Leveraging data analytics and segmentation techniques",
        points: 1
      },
      {
        text: "Using visual and creative elements to appeal to specific demographics",
        points: 3
      },
      {
        text: "Focusing on building relationships and connecting with individuals",
        points: 4
      }
    ]
  },
  {
    id: 6,
    question: "How do you approach content distribution and promotion?",
    options: [
      {
        text: "Engaging in influencer marketing and collaborations",
        points: 4
      },
      {
        text: "Optimizing content for search engines and utilizing SEO techniques",
        points: 1
      },
      {
        text: "Leveraging social media platforms and viral marketing",
        points: 3
      },
      {
        text: "Utilizing email marketing and targeted advertising campaigns",
        points: 2
      }
    ]
  },
  {
    id: 7,
    question: "How do you adapt to emerging trends and technologies in internet marketing?",
    options: [
      {
        text: "Embrace and explore new trends and technologies enthusiastically",
        points: 3
      },
      {
        text: "Evaluate their potential based on data and analytics",
        points: 1
      },
      {
        text: "Collaborate with others to brainstorm innovative uses",
        points: 4
      },
      {
        text: "Conduct research to understand their implications and benefits",
        points: 2
      }
    ]
  },
  {
    id: 8,
    question: "How do you approach customer relationship management?",
    options: [
      {
        text: "Focus on building personalized relationships and customer loyalty",
        points: 4
      },
      {
        text: "Utilize data analytics and automation to manage customer interactions",
        points: 1
      },
      {
        text: "Implement visually appealing and engaging customer experiences",
        points: 3
      },
      {
        text: "Develop processes and systems to ensure effective customer support",
        points: 2
      }
    ]
  },
  {
    id: 9,
    question: "What is your preferred approach to lead generation?",
    options: [
      {
        text: "Building relationships and networking with potential customers",
        points: 4
      },
      {
        text: "Implementing data-driven strategies and lead scoring techniques",
        points: 1
      },
      {
        text: "Creating visually appealing and interactive lead magnets",
        points: 3
      },
      {
        text: "Optimizing landing pages and utilizing targeted advertising",
        points: 2
      }
    ]
  },
  {
    id: 10,
    question: "How do you approach competitor analysis in internet marketing?",
    options: [
      {
        text: "Analyzing their marketing strategies and adapting innovative ideas",
        points: 3
      },
      {
        text: "Utilizing data and analytics to understand their strengths and weaknesses",
        points: 1
      },
      {
        text: "Monitoring their visual content and creative campaigns",
        points: 4
      },
      {
        text: "Researching their customer engagement and relationship-building tactics",
        points: 2
      }
    ]
  }
];

  // Code for showing questions and calculating points and time taken

  let question_count = 0;
let points = 0;
let startTime = 0;

window.onload = function() {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
      <li class="option">${first.text}</li>
      <li class="option">${second.text}</li>
      <li class="option">${third.text}</li>
      <li class="option">${fourth.text}</li>
    </ul>
  `;

  toggleActive();
  startTimer();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
      stopTimer();
    };
  }
}

function startTimer() {
  startTime = new Date().getTime();
}

function stopTimer() {
  let endTime = new Date().getTime();
  let timeTaken = endTime - startTime;
  sessionStorage.setItem("time_taken", timeTaken);
}


function next() {
  if (question_count === questions.length - 1) {
    calculateResult();
    location.href = "end.html";
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;

  // Calculate points based on user answers
  let currentQuestion = questions[question_count];

  for (let i = 0; i < currentQuestion.options.length; i++) {
    if (user_answer === currentQuestion.options[i].text) {
      points += currentQuestion.options[i].points;
      break;
    }
  }

  question_count++;
  show(question_count);
}

function calculateResult() {
  sessionStorage.setItem("points", points);
  
  // Display different texts based on the total score
  let resultText = "";
  
  if (points >= 10 && points <= 15) {
    resultText = "Congratulations! Based on your quiz results, your personality is aligned with the Content Marketing strategy. You excel in crafting compelling written content, storytelling, and educating your audience. Content Marketing focuses on creating valuable and informative content to attract and engage with your target audience. Your ability to create engaging content and build relationships through your words makes you a strong content marketer.";
  } else if (points >= 16 && points <= 20) {
    resultText = "Great job! Your quiz results indicate that your personality is well-suited for Search Engine Optimization (SEO). You have a data-driven approach and utilize analytics to optimize your online presence. SEO focuses on improving your website's visibility in search engine results. Your ability to analyze data, conduct keyword research, and optimize content helps you drive organic traffic and achieve higher search engine rankings.";
  } else if (points >= 21 && points <= 25) {
    resultText = "Well done! Your quiz results show that your personality aligns with Social Media Marketing. You have a creative flair and excel in creating visually appealing and engaging multimedia content. Social Media Marketing focuses on leveraging social media platforms to connect with and engage your target audience. Your ability to create captivating visual content and engage with your community makes you a strong social media marketer.";
  } else if (points >= 26 && points <= 30) {
    resultText = "Congratulations! Based on your quiz results, your personality is a great fit for Influencer Marketing. You have a strong focus on building relationships, connecting with individuals, and fostering brand loyalty. Influencer Marketing involves collaborating with influential individuals in your industry to promote your products or services. Your ability to build relationships and engage with influencers makes you an effective influencer marketer.";
  }
  
  sessionStorage.setItem("resultText", resultText);
}
