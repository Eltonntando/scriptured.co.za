// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
    question: "Name the First book in the New Testament?",
    answer: "Mathew",
    options: [
      "Luke",
      "Mark",
      "Mathew",
      "Acts"
    ]
  },
     {
        numb: 2,
    question: "What is Mathew telling us?",
    answer: "This is an account of Jesus’s life, death, and resurrection, focusing on Jesus’ role as the true king of the Jews.",
    options: [
      "This is an account of God's plan focusing on Jesus’s role as the true king of the Jews",
      "This is an account of the Church focusing on Jesus’s role as the true king of the Jews",
      "This is an account of Mathew’s life following Jesus’s the true king of the Jews",
      "This is an account of Jesus’ life, death, and resurrection, focusing on Jesus’ role as the true king of the Jews."
    ]
  },
    {
        numb: 3,
    question: "Name the second book in the New Testament?",
    answer: "Mark",
    options: [
      "Luke",
      "Mark",
      "John",
      "Acts"
    ]
  },
    {
        numb: 4,
    question: "What is the book of Mark telling us?",
    answer: "This brief account of Jesus’ earthly ministry highlights Jesus’ authority and servanthood.",
    options: [
      "This is an account of God's plan focusing on Jesus’s role as the true king of the Jews",
      "This brief account of Jesus’ earthly ministry highlights Jesus’ authority and servanthood.",
      "This is an account of Mark’s life following Jesus’s the true king of the Jews",
      "This is an account of Jesus’ life, death, and resurrection, focusing on Jesus’ role as the true king of the Jews."
    ]
  },
    {
        numb: 5,
    question: "The book following Mark is Called?",
    answer: "Luke",
    options: [
      "Luke",
      "Romans",
      "John",
      "Acts"
    ]
  },
    {
        numb: 6,
    question: "What is the book of Luke about?",
    answer: "Luke writes the most thorough account of Jesus’ life, pulling together eyewitness testimonies to tell the full story of Jesus.",
    options: [
      "This is an account of God's plan focusing on Jesus’s role as the true king of the Jews",
      "Luke writes the most thorough account of Jesus’ life, pulling together eyewitness testimonies to tell the full story of Jesus.",
      "This is an account of Luke’s life following Jesus’s the true king of the Jews",
      "Luke writes less about the account of Jesus’ life, and tells a very short story of Jesus."
    ]
  },
    {
        numb: 7,
    question: "The book after Luke is Called?",
    answer: "John",
    options: [
      "1 Corinthians",
      "Romans",
      "John",
      "Acts"
    ]
  },
    {
        numb: 8,
    question: "What is the book of John about?",
    answer: "John lists stories of signs and miracles with the hope that readers will believe in Jesus.",
    options: [
      "Jesus lists stories of signs and miracles with the hope that readers will believe in God.",
      "John lists stories of signs and miracles with the hope that readers will believe in Jesus.",
      "Jonah lists stories of signs and miracles with the hope that readers will believe in Jesus.",
      "Peter lists stories of signs and miracles with the hope that readers will believe in Jesus."
    ]
  },
    {
        numb: 9,
    question: "The book after John is Called?",
    answer: "Acts",
    options: [
      "1 Corinthians",
      "Romans",
      "Galatians",
      "Acts"
    ]
  },
    {
        numb: 10,
    question: "What is the book of Acts talking about?",
    answer: "Jesus returns to the Father, the Holy Spirit comes to the church, the gospel of Jesus spreads to the world.",
    options: [
      "Jesus lists stories of signs and miracles with the hope that readers will believe in God.",
      "Acts lists stories of signs and miracles with the hope that readers will believe in Jesus.",
      "Jesus heals the sick, and the people start witnessing the true power of God in him.",
      "Jesus returns to the Father, the Holy Spirit comes to the church, the gospel of Jesus spreads to the world."
    ]
  },
    {
        numb: 11,
    question: "The book following after Acts is the book of?",
    answer: "Romans",
    options: [
      "1 Corinthians",
      "Romans",
      "Galatians",
      "Ephesians"
    ]
  },
    {
        numb: 12,
    question: "What is the book of Romans talking about?",
    answer: "Paul summarizes how the gospel of Jesus works in a letter to the churches at Rome, where he plans to visit.",
    options: [
      "Paul summarizes how God works in a letter to the churches at Rome, where he plans to visit.",
      "Paul summarizes bible in a letter to the churches at Rome, where he plans to visit.",
      "Paul talks about how Jesus was living in a letter to the churches at Rome, where he plans to visit.",
      "Paul summarizes how the gospel of Jesus works in a letter to the churches at Rome, where he plans to visit."
    ]
  },
    {
        numb: 13,
    question: "The book following after Romans is the book of?",
    answer: "1 Corinthians",
    options: [
      "1 Corinthians",
      "Philippians",
      "Galatians",
      "Ephesians"
    ]
  },
    {
        numb: 14,
    question: "What is the book of 1 Corinthians talking about?",
    answer: "Poul writes a disciplinary letter to a fractured church in Corinth, and answers questions they’ve had about Christianity.",
    options: [
      "Paul writes a disciplinary letter to a fractured church in Corinth, and answers some questions that they’ve had about Christians should behave.",
      "Paul summarizes bible in a letter to the churches at Corinth, where he plans to visit.",
      "Paul talks about how Jesus was living in a letter to the churches at Corinth, where he plans to visit.",
      "Paul summarizes how the gospel of Jesus works in a letter to the churches at Corinth, where he plans to visit."
    ]
  },
    {
        numb: 15,
    question: "The book following after 1 Corinthians is the book of?",
    answer: "2 Corinthians",
    options: [
      "Galatians",
      "Philippians",
      "2 Corinthians",
      "Ephesians"
    ]
  },
    {
        numb: 16,
    question: "What is the book of 2 Corinthians talking about?",
    answer: "Paul writes a letter of reconciliation to the church at Corinth, and clears up some concerns that they have.",
    options: [
      "Paul writes a disciplinary letter to a fractured church in Corinth, and answers questions they’ve had about Christianity.",
      "Paul writes a letter of reconciliation to the church at Corinth, and clears up some concerns that they have.",
      "Paul talks about how Jesus was living in a second letter to the churches at Corinth.",
      "Paul summarizes how the gospel of Jesus works in a second letter to the churches at Corinth."
    ]
  },
    {
        numb: 17,
    question: "The book following after 2 Corinthians is the book of?",
    answer: "Galatians",
    options: [
      "3 Corinthians",
      "Philippians",
      "Galatians",
      "Ephesians"
    ]
  },
    {
        numb: 18,
    question: "What is the book of Galatians talking about?",
    answer: "Paul hears the Galatian churches have been lead to think salvation is from the law of Moses, and writes a heated letter telling them that false teachers have it wrong.",
    options: [
      "Paul writes a disciplinary letter to a fractured church in Galatia, and answers questions they’ve had about Christianity.",
      "Paul writes a great letter to the church in Galatia, and clears up some concerns that they have.",
      "Paul hears the Galatian churches have been lead to think salvation is from the law of Moses, and writes a heated letter telling them that false teachers have it wrong.",
      "Paul summarizes how the gospel of Jesus works in a letter to the churches in Galatia."
    ]
  },
    {
        numb: 19,
    question: "The book following after Galatians is the book of?",
    answer: "Ephesians",
    options: [
      "1 Thessalonians",
      "Philippians",
      "Colossians",
      "Ephesians"
    ]
  },
    {
        numb: 20,
    question: "What is the book of Ephesians talking about?",
    answer: "Paul writes to the church at Ephesus about how to walk in grace, peace, and love.",
    options: [
      "Paul writes a disciplinary letter to a church in Ephesus, and answers questions they’ve had about Christianity.",
      "Paul writes to the church in Ephesus about how to walk in grace, peace, and love.",
      "Paul hears the Ephesus churches have been lead to think salvation is from the law of Moses.",
      "Paul writes to the church in Ephesus about how angry God is towards them."
    ]
  },
    {
        numb: 21,
    question: "The book following after Ephesians is the book of?",
    answer: "Philippians",
    options: [
      "1 Thessalonians",
      "Philippians",
      "Colossians",
      "1 Timothy"
    ]
  },
    {
        numb: 22,
    question: "What is the book of Philippians talking about?",
    answer: "An encouraging letter to the church of Philippi from Paul, telling them how to have joy in Christ.",
    options: [
      "A dicouraging letter to the church of Philippi from Paul, telling them how to live in Christ.",
      "An encouraging letter to the church of Philippi from Paul, telling them how to have joy in Christ.",
      "A letter to the church of Philippi from Paul, telling them that the Lord is not pleased with them.",
      "Paul writes to the church of Philippi about how angry God is towards them."
    ]
  },
    {
        numb: 23,
    question: "The book following after Philippians is the book of?",
    answer: "Colossians",
    options: [
      "1 Thessalonians",
      "Titus",
      "Colossians",
      "1 Timothy"
    ]
  },
    {
        numb: 24,
    question: "What is the book of Colossians talking about?",
    answer: "Paul writes the church at Colossae a letter about who they are in Christ, and how to walk in Christ.",
    options: [
      "A dicouraging letter to the church of Colossae from Paul, telling them that they have lost their way to Christ.",
      "Paul writes the church at Colossae a letter about who they are in Christ, and how to walk in Christ.",
      "A letter to the church of Colossae from Paul, telling them that the Lord is not pleased with them.",
      "Paul writes to the church of Colossae about how angry God is towards them."
    ]
  },
    {
        numb: 25,
    question: "The book following after Colossians is the book of?",
    answer: "1 Thessalonians",
    options: [
      "1 Thessalonians",
      "Titus",
      "Philemon",
      "1 Timothy"
    ]
  },
    {
        numb: 26,
    question: "What is happening in the book of 1 Thessalonians?",
    answer: "Paul has heard a good report on the church at Thessalonica, he encourages them to “excel still more” in faith, hope, and love.",
    options: [
      "A dicouraging letter to the church in Thessalonica from Paul, telling them that they have lost their way to Christ.",
      "Paul has heard a good report on the church at Thessalonica, he encourages them to “excel still more” in faith, hope, and love.",
      "A letter to the church in Thessalonica from Paul, telling them that the Lord is not pleased with them.",
      "Paul has heard a bad report on the church in Thessalonica, and warns them about God's wrath."
    ]
  },
    {
        numb: 27,
    question: "The next book after 1 Thessalonians is the book of?",
    answer: "2 Thessalonians",
    options: [
      "Hebrews",
      "Titus",
      "Philemon",
      "2 Thessalonians"
    ]
  },
    {
        numb: 28,
    question: "What is happening in the book of 2 Thessalonians?",
    answer: "Paul instructs the Thessalonians on how to stand firm until the coming of Jesus.",
    options: [
      "A dicouraging letter to the church in Thessalonica from Paul, telling them that they have lost their way.",
      "Paul instructs the Thessalonians on how to stand firm until the coming of Jesus.",
      "Paul instructs the Thessalonians on how to start living like Jesus and walk in his steps.",
      "Paul has heard a bad report on the church in Thessalonica, and warns them about God's wrath for the second time."
    ]
  },
    {
        numb: 29,
    question: "The next book after 2 Thessalonians is the book of?",
    answer: "1 Timothy",
    options: [
      "Hebrews",
      "Titus",
      "Philemon",
      "1 Timothy"
    ]
  },
    {
        numb: 30,
    question: "What is happening in the book of 1 Timothy?",
    answer: "Paul gives his protegé Timothy instruction on how to lead a church with sound teaching and a godly example.",
    options: [
      "A dicouraging letter to Timothy from Paul, telling him that he has lost his godly way.",
      "Paul instructs Timothy on how to stand firm until the coming of Jesus.",
      "Paul gives his protegé Timothy instruction on how to lead a church with sound teaching and a godly example.",
      "Paul has heard a bad report on Timothy, and warns him about God's wrath."
    ]
  },
    {
        numb: 31,
    question: "The next book after 1 Timothy is the book of?",
    answer: "2 Timothy",
    options: [
      "Hebrews",
      "Titus",
      "Philemon",
      "2 Timothy"
    ]
  },
    {
        numb: 32,
    question: "What is happening in the book of 2 Timothy?",
    answer: "Paul is nearing the end of his life, and encourages Timothy to continue preaching the word.",
    options: [
      "A second dicouraging letter to Timothy from Paul, telling him that he has lost his godly way.",
      "Paul instructs Timothy on how to stand firm until the coming of Jesus in this second letter.",
      "Paul is nearing the end of his life, and encourages Timothy to continue preaching the word.",
      "Paul is still young, and discourages Timothy to continue preaching the word."
    ]
  },
    {
        numb: 33,
    question: "The next book after 2 Timothy is the book of?",
    answer: "Titus",
    options: [
      "Hebrews",
      "Titus",
      "Philemon",
      "3 Timothy"
    ]
  },
    {
        numb: 34,
    question: "What is happening in the book of Titus?",
    answer: "Paul advises Titus on how to lead orderly, counter-cultural churches on the island of Crete.",
    options: [
      "A dicouraging letter to Titus from Paul, telling him that he has lost his godly way.",
      "Paul instructs Titus on how to stand firm until the coming of Jesus in this second letter.",
      "Paul is nearing the end of his life, and encourages Titus to continue preaching the word.",
      "Paul advises Titus on how to lead orderly, counter-cultural churches on the island of Crete."
    ]
  },
    {
        numb: 35,
    question: "The next book after Titus is the book of?",
    answer: "Philemon",
    options: [
      "Hebrews",
      "2 Titus",
      "Philemon",
      "James"
    ]
  },
    {
        numb: 36,
    question: "What is happening in the book of Philemon?",
    answer: "Paul strongly recommends that Philemon accept his runaway slave as a brother, not a slave.",
    options: [
      "Paul strongly recommends that Philemon must not accept his runaway slave as a brother, but a slave.",
      "Paul instructs Philemon on how to stand firm until the coming of Jesus in this second letter.",
      "Paul strongly recommends that Philemon accept his runaway slave as a brother, not a slave.",
      "Paul advises Philemon on how to lead orderly, counter-cultural churches on the island of Crete."
    ]
  },
    {
        numb: 37,
    question: "The next book after Philemon is the book of?",
    answer: "Hebrews",
    options: [
      "Hebrews",
      "1 John",
      "1 Peter",
      "James"
    ]
  },
    {
        numb: 38,
    question: "What is happening in the book of Hebrews?",
    answer: "A letter encouraging Christians to cling to Christ despite persecution, because he is greater. ",
    options: [
      "A letter discouraging Christians on clinging to Christ despite persecution, because he is greater. ",
      "Paul instructs the Chrristians on how to stand firm until the coming of Jesus in this letter.",
      "A letter encouraging Christians to cling to Christ despite persecution, because he is greater. ",
      "A letter to Christians to change their sinful ways and be fully angaged into God's ways. "
    ]
  },
    {
        numb: 39,
    question: "The next book after Hebrews is the book of?",
    answer: "James",
    options: [
      "Jude",
      "1 John",
      "1 Peter",
      "James"
    ]
  },
    {
        numb: 40,
    question: "What is happening in the book of James?",
    answer: "A letter telling Christians to live in ways that demonstrate their faith in action.",
    options: [
      "A letter discouraging Christians on clinging to Christ despite persecution, because he is greater.",
      "Paul instructs the Chrristians on how to stand firm until the coming of Jesus in this letter.",
      "A letter telling Christians to stop living in ways that demonstrate their faith in action. ",
      "A letter telling Christians to live in ways that demonstrate their faith in action."
    ]
  },
    {
        numb: 41,
    question: "The next book after James is the book of?",
    answer: "1 Peter",
    options: [
      "Jude",
      "1 John",
      "1 Peter",
      "2 James"
    ]
  },
    {
        numb: 42,
    question: "What is happening in the book of 1 Peter?",
    answer: "Peter writes to Christians who are being persecuted, encouraging them to testify to the truth and live accordingly.",
    options: [
      "Peter writes to Christians who are being persecuted, discouraging them on testifying to the truth and not to live accordingly.",
      "Peter writes to Christians who are being persecuted, encouraging them to testify to the truth and live accordingly.",
      "A letter from Peter telling Christians to stop living in ways that demonstrate their faith in action. ",
      "A letter from Peter telling Christians that they should not trust anything they hear, nor everything they see."
    ]
  },
    {
        numb: 43,
    question: "The next book after 1 Peter is the book of?",
    answer: "2 Peter",
    options: [
      "Jude",
      "1 John",
      "2 Peter",
      "John"
    ]
  },
    {
        numb: 44,
    question: "What is happening in the book of 2 Peter?",
    answer: "Peter writes a letter reminding Christians about the truth of Jesus, and warning them that false teachers will come.",
    options: [
      "Peter writes a letter reminding Christians about the truth of Jesus, and warning them that false teachers will come.",
      "Peter writes a letter reminding Christians about the truth of Jesus, and telling them that good teachers will come.",
      "Peter writes a letter to Christians warning them that false teachers will come, and they can listen to them.",
      "A letter from Peter telling Christians that they should not trust anything they hear, nor everything they see."
    ]
  },
    {
        numb: 45,
    question: "The next book after 1 Peter is the book of?",
    answer: "1 John",
    options: [
      "Jude",
      "1 John",
      "3 Peter",
      "John"
    ]
  },
    {
        numb: 46,
    question: "What is happening in 1 John?",
    answer: "John writes a letter to Christians about keeping Jesus’ commands, loving one another, and important things they should know.",
    options: [
      "Jonah writes a letter to Christians about keeping Jesus’ commands, loving one another, and important things they should know.",
      "Peter writes a letter to Christians about keeping Jesus’ commands, loving one another, and important things they should know.",
      "John writes a letter to Christians about keeping Jesus’ commands, loving one another, and important things they should know.",
      "Poul writes a letter to Christians about keeping Jesus’ commands, loving one another, and important things they should know."
    ]
  },
    {
        numb: 47,
    question: "The next book after 1 John is the book of?",
    answer: "2 John",
    options: [
      "Jude",
      "2 John",
      "Revelations",
      "John"
    ]
  },
    {
        numb: 48,
    question: "What is happening in 2 John?",
    answer: "A very brief letter about walking in truth, love, and obedience. ",
    options: [
      "A very brief letter about walking in lies, hate, and disobedience. ",
      "A very long letter about walking in lies, hate, and disobedience. ",
      "A very brief letter about walking in truth, love, and obedience. ",
      "A very long letter written by Moses."
    ]
  },
    {
        numb: 49,
    question: "The next book after 2 John is the book of?",
    answer: "3 John",
    options: [
      "Jude",
      "3 John",
      "Revelations",
      "John"
    ]
  },
    {
        numb: 50,
    question: "What is happening in the book of 3 John?",
    answer: "A very brief letter about walking in truth, love, and obedience.",
    options: [
      "A second very brief letter about walking in lies, hate, and disobedience.",
      "A second very long letter about walking in lies, hate, and disobedience.",
      "A second very brief letter about walking in truth, love, and obedience.",
      "An even shorter letter about Christian fellowship."
    ]
  },
    {
        numb: 51,
    question: "The next book after 3 John is the book of?",
    answer: "Jude",
    options: [
      "Jude",
      "4 John",
      "Revelations",
      "John"
    ]
  },
    {
        numb: 52,
    question: "What is happening in the book of Jude?",
    answer: "A letter encouraging Christians to contend for the faith, even though ungodly persons have crept in unnoticed.",
    options: [
      "A very brief letter about walking in lies, hate, and disobedience.",
      "A letter encouraging Christians to contend for the faith, even though ungodly persons have crept in unnoticed.",
      "A letter discouraging Christians on contending for the faith, as ungodly persons crept in unnoticed.",
      "A letter about Christian fellowship."
    ]
  },
    {
        numb: 53,
    question: "What is happens in the book of Revelations?",
    answer: "John sees visions of things that have been, things that are, and things that are yet to come.",
    options: [
      "A letter about consequences of walking in lies, hate, and disobedience.",
      "John sees a burning tree and gets called by God",
      "Jesus tells visions of things that have been, things that are, and things that are yet to come.",
      "John sees visions of things that have been, things that are, and things that are yet to come."
    ]
  },
    {
        numb: 54,
    question: "How many books does the Old Testament contain?",
    answer: "39 books which were written long before Jesus was born.",
    options: [
      "39 books which were written long before Jesus was born.",
      "33 books which were written long before Jesus was born.",
      "49 books which were written long before Jesus was born.",
      "27 books which were written long before Jesus was born."
    ]
  },
    {
        numb: 55,
    question: "How many books does the New Testament contain?",
    answer: "27 books about Jesus’ ministry and what it means to follow him.",
    options: [
      "66 books about Jesus’ ministry and what it means to follow him.",
      "33 books about Jesus’ ministry and what it means to follow him.",
      "27 books about Jesus’ ministry and what it means to follow him.",
      "12 books about Jesus’ ministry and what it means to follow him."
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
