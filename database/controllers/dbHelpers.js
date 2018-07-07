const db = require('../models');
const sequelize = require('sequelize');

const saveProfile = (userId, profileName, widgetNames) => {
  // TODO: implement userId filtering
  console.log('DB: saving profile ', profileName);

  // delete the old profile and its associations
  db.models.Profile.findOne({
    where: {
      name: profileName,
    },
  })
    .then((profile) => {
      if (profile) {
        console.log('Deleting ', profileName);
        return profile.destroy();
      } else {
        console.log('Profile does not already exist, creating...');
      }
    })
    .then(() => {
      return db.models.Profile.findOrCreate({
        where: {
          name: profileName,
        },
      });
    })
    .then((profile) => {
      widgetNames.forEach((widgetName) => {
        db.models.Widget.findOne({
          attributes: ['id'],
          where: { name: widgetName },
        })
          .then((widget) => {
            if (widget) {
              widget.addProfile(profile[0]);
              console.log(`Successfully added widget ${widget.dataValues.id} to ${profile[0].dataValues.name}`);
            }
          });
      });
    })
    .catch((err) => {
      console.log('Error in saveProfile ', err);
    });
};

const loadUserProfiles = (userId) => {
  console.log('Loading Profiles: \n');
  return db.models.Profile.findAll({
    include: [
      {
        model: db.models.Widget,
      },
    ],
  });
};

const saveWeatherWidgetConfig = (userId, widgetName, zipcode) => {
  return db.models.Widget.findOne({
    where: {
      name: widgetName,
    },
  })
    .then((widget) => {
      let zip = { zipcodes: [zipcode] };
      return widget.addUser(userId, {
        through: { configuration: zip },
      })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    });
};

const saveStockWidgetConfig = (userId, widgetName, stockSymbols) => {
  return db.models.Widget.findOne({
    where: {
      name: widgetName,
    },
  })
    .then((widget) => {
      let stocks = { stocks: stockSymbols };
      return widget.addUser(userId, {
        through: { configuration: stocks },
      })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    });
};

const getUserDevices = (userId) => {
  return db.models.User.findOne({
    where: {
      id: userId,
    },
  })
    .then((user) => {
      // console.log('USER RETRIEVED', user);
      return user;
    });
};


module.exports = {
  saveProfile,
  loadUserProfiles,
  saveWeatherWidgetConfig,
  saveStockWidgetConfig,
  getUserDevices,
};
