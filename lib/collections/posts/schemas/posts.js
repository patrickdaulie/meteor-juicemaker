var postFields = {
  title: {
    type: String,
    label: 'Title'
  },
  body: {
    type: String,
    label: 'Body',
    autoform: {
      type: 'summernote',
      class: 'editor',
      rows: 5
    }
  },
   secondbody: {
    type: String,
    label: 'Second Body',
    autoform: {
      type: 'textarea',
      rows: 5
    }
  },
  category:{
  type: String,
  label: "Category",
  allowedValues: ['Meteor','NoSQL','Bootstrap']
},
  _id: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  userId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  author: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  createdAt: {
    type: Date,
    optional: true,
    autoform: {
      omit: true
    }
  }
};

PostSchema = new SimpleSchema(postFields);