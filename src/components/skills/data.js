import * as am5 from "@amcharts/amcharts5"

export const data = [
  {
    name: "TECHNOLOGIES",
    nodeSettings: { fill: am5.color(0xaaaaaa) },
    children: [
      {
        name: "TypeScript",
        nodeSettings: { fill: am5.color("#2F74BF") },
        children: [
          {
            name: "React",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 2,
          },
          {
            name: "React Native",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 1,
          },
          {
            name: "Angular",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 1,
          },
          {
            name: "Next.js",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 2,
          },
          {
            name: "NestJs",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 2,
          },
          {
            name: "Graphql",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 1,
          },
          {
            name: "tRPC",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 1,
          },
          {
            name: "Tailwind CSS",
            nodeSettings: { fill: am5.color("#468ad2") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
      {
        name: "Ruby",
        nodeSettings: { fill: am5.color("#960F06") },
        children: [
          {
            name: "Ruby on Rails",
            nodeSettings: { fill: am5.color("#e01609") },
            value: 3,
          },
          {
            name: "Sinatra",
            nodeSettings: { fill: am5.color("#e01609") },
            value: 1,
          },
          {
            name: "DigitalOcean",
            nodeSettings: { fill: am5.color("#e01609") },
            value: 1,
          },
          {
            name: "Heroku",
            nodeSettings: { fill: am5.color("#e01609") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
      {
        name: "Php",
        nodeSettings: { fill: am5.color("#797CB4") },
        children: [
          {
            name: "Laravel",
            nodeSettings: { fill: am5.color("#8d8fbf") },
            value: 1,
          },
          {
            name: "Wordpress",
            nodeSettings: { fill: am5.color("#8d8fbf") },
            value: 2,
          },
          {
            name: "Symfony",
            nodeSettings: { fill: am5.color("#8d8fbf") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
      {
        name: "Python",
        nodeSettings: { fill: am5.color("#FFD141") },
        children: [
          {
            name: "Apache Airflow",
            nodeSettings: { fill: am5.color("#ffd966") },
            value: 2,
          },
          {
            name: "FastAPI",
            nodeSettings: { fill: am5.color("#ffd966") },
            value: 1,
          },
          {
            name: "Django",
            nodeSettings: { fill: am5.color("#ffd966") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
      {
        name: "AWS",
        nodeSettings: { fill: am5.color("#FF9A00") },
        children: [
          {
            name: "EC2",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "RDS",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "Redshift",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "ECS",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "ECR",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "Cloudformation",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "Elastic Beanstalk",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "ElastiCache",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "Cloudwatch",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
          {
            name: "S3",
            nodeSettings: { fill: am5.color("#ffad33") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
      {
        name: "Database",
        nodeSettings: { fill: am5.color("#336790") },
        children: [
          {
            name: "Mysql",
            nodeSettings: { fill: am5.color("#3c7aaa") },
            value: 2,
          },
          {
            name: "PostgreSQL",
            nodeSettings: { fill: am5.color("#3c7aaa") },
            value: 3,
          },
          {
            name: "MongoDB",
            nodeSettings: { fill: am5.color("#3c7aaa") },
            value: 1,
          },
          {
            name: "Redshift",
            nodeSettings: { fill: am5.color("#3c7aaa") },
            value: 1,
          },
          {
            name: "Redis",
            nodeSettings: { fill: am5.color("#3c7aaa") },
            value: 1,
          },
          {
            name: "SQLite",
            nodeSettings: { fill: am5.color("#3c7aaa") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
      {
        name: "Other",
        nodeSettings: { fill: am5.color("#34495e") },
        children: [
          {
            name: "Docker",
            nodeSettings: { fill: am5.color("#3f5973") },
            value: 2,
          },
          {
            name: "Git",
            nodeSettings: { fill: am5.color("#3f5973") },
            value: 2,
          },
          {
            name: "ASP.NET Core",
            nodeSettings: { fill: am5.color("#3f5973") },
            value: 1,
          },
        ],
      },
      {
        value: 0.1,
        nodeSettings: { fill: am5.color(0xffffff) },
      },
    ],
  },
]
