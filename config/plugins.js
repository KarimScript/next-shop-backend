module.exports = ({ env }) => ({
    // ...
    email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: 'ghkarim460@gmail.com',
        defaultReplyTo: 'ghkarim460@gmail.com',
        testAddress: '41830461@students.liu.edu.lb',
      },
    },
  },
    


    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d',
        },
      },
    },
  });



  // email: {
  //   config: {
  //     provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
  //     providerOptions: {
  //       apiKey: process.env.SENDGRID_API_KEY,
  //     },
  //     settings: {
  //       defaultFrom: 'ghkarim460@gmail.com',
  //       defaultReplyTo: 'ghkarim460@gmail.com',
  //       // testAddress: 'ghkarim460@gmail.com',
  //     },
  //   },
  // },

  // email: {
  //   config: {
  //     provider: 'nodemailer',
  //     providerOptions: {
  //       host: env('SMTP_HOST', 'smtp.example.com'),
  //       port: env('SMTP_PORT', 587),
  //       auth: {
  //         user: env('SMTP_USERNAME'),
  //         pass: env('SMTP_PASSWORD'),
  //       },
  //       // ... any custom nodemailer options
  //     },
  //     settings: {
  //       defaultFrom: 'ghkarim460@gmail.com',
  //       defaultReplyTo: 'ghkarim460@gmail.com',
  //     },
  //   },
  // },