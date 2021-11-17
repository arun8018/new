import moment from 'moment-timezone';

export const resources = [
  {
    id: '1',
    title: 'John C',
    businessHours: [
      {
        endTime: '17:00:00',
        startTime: '9:00:00',
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: '2',
    title: 'Eddie R',
    businessHours: [
      {
        endTime: '16:00:00',
        startTime: '10:00:00',
        daysOfWeek: [4],
      },
      {
        endTime: '',
        startTime: '',
        daysOfWeek: [],
      },
    ],
  },
  {
    id: '3',
    title: 'Jay W',
    businessHours: [
      {
        endTime: '16:00:00',
        startTime: '8:00:00',
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: '4',
    title: 'Bill G',
  },
  {
    id: '5',
    title: 'Amanda G',
  },
  {
    id: '6',
    title: 'Reggier M',
  },
  {
    id: '7',
    title: 'Reggier M',
  },
  {
    id: '8',
    title: 'Reggier M',
  },
  {
    id: '9',
    title: 'Reggier M',
  },
  {
    id: '10',
    title: 'Reggier M',
  },
];

export const events = [
  {
    id: '1',
    title: '90 Minute Massage',
    end: moment.utc().add('90', 'minutes').toISOString(),
    start: moment.utc().toISOString(),
    resourceId: '1',
    editable: true,
    groupId: 'zzTop',
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
  },
  {
    id: '2',
    title: 'Haircut',
    end: moment.utc().add('30', 'minutes').toISOString(),
    start: moment.utc().toISOString(),
    resourceId: '2',
    editable: true,
  },
  {
    id: '3',
    title: 'Pedicure',
    end: moment.utc().add('60', 'minutes').toISOString(),
    start: moment.utc().toISOString(),
    resourceId: '3',
    editable: true,
    groupId: 'zzTop',
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
  },
];
