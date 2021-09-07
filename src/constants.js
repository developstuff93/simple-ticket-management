export const MockTickets = [
  {
    id: 1,
    title: "ticket_1",
    isCompleted: true,
    childTickets: [
      {
        id: 2,
        title: "ticket_2",
        isCompleted: false,
        childTickets: [
          {
            id: 10,
            title: "ticket_10",
            isCompleted: true,
            childTickets: [],
          },
          {
            id: 12,
            title: "ticket_12",
            isCompleted: true,
            childTickets: [],
          },
          {
            id: 11,
            title: "ticket_11",
            isCompleted: true,
            childTickets: [],
          },
        ],
      },
      {
        id: 3,
        title: "ticket_3",
        isCompleted: false,
        childTickets: [],
      },
      {
        id: 4,
        title: "ticket_4",
        isCompleted: true,
        childTickets: [],
      },
    ],
  },
  {
    id: 5,
    title: "ticket_5",
    isCompleted: false,
    childTickets: [
      {
        id: 6,
        title: "ticket_6",
        isCompleted: false,
        childTickets: [],
      },
      {
        id: 7,
        title: "ticket_7",
        isCompleted: true,
        childTickets: [
          {
            id: 13,
            title: "ticket_13",
            isCompleted: true,
            childTickets: [],
          },
          {
            id: 14,
            title: "ticket_14",
            isCompleted: true,
            childTickets: [
              {
                id: 15,
                title: "ticket_15",
                isCompleted: true,
                childTickets: [],
              },
            ],
          },
          {
            id: 8,
            title: "ticket_8",
            isCompleted: true,
            childTickets: [],
          },
        ],
      },
      {
        id: 16,
        title: "ticket_16",
        isCompleted: true,
        childTickets: [],
      },
    ],
  },
  {
    id: 9,
    title: "ticket_9",
    isCompleted: true,
    childTickets: [],
  },
];
