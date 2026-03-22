import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  type Sport = {
    #badminton;
    #football;
    #general;
  };

  type EventStatus = {
    #upcoming;
    #completed;
  };

  type Event = {
    id : Nat;
    title : Text;
    sport : Sport;
    date : Time.Time;
    location : Text;
    description : Text;
    status : EventStatus;
  };

  type Announcement = {
    id : Nat;
    title : Text;
    content : Text;
    sport : Sport;
    createdAt : Time.Time;
  };

  type Venue = {
    id : Nat;
    name : Text;
    sport : Sport;
    location : Text;
    description : Text;
  };

  module Event {
    public func compareByDate(e1 : Event, e2 : Event) : Order.Order {
      switch (Int.compare(e1.date, e2.date)) {
        case (#equal) { Text.compare(e1.title, e2.title) };
        case (order) { order };
      };
    };
  };

  // Maps to store persistent data
  let events = Map.empty<Nat, Event>();
  let announcements = Map.empty<Nat, Announcement>();
  let venues = Map.empty<Nat, Venue>();

  // Persistent counters
  var eventIdCounter = 1;
  var announcementIdCounter = 1;
  var venueIdCounter = 1;

  // Add Event (Primarily used for initialization)
  public shared ({ caller }) func addEvent(
    title : Text,
    sport : Sport,
    date : Time.Time,
    location : Text,
    description : Text,
    status : EventStatus,
  ) : async Nat {
    let id = eventIdCounter;
    eventIdCounter += 1;

    let newEvent : Event = {
      id;
      title;
      sport;
      date;
      location;
      description;
      status;
    };
    events.add(id, newEvent);
    id;
  };

  // Add Announcement
  public shared ({ caller }) func addAnnouncement(
    title : Text,
    content : Text,
    sport : Sport,
    createdAt : Time.Time,
  ) : async Nat {
    let id = announcementIdCounter;
    announcementIdCounter += 1;

    let newAnnouncement : Announcement = {
      id;
      title;
      content;
      sport;
      createdAt;
    };
    announcements.add(id, newAnnouncement);
    id;
  };

  // Add Venue
  public shared ({ caller }) func addVenue(
    name : Text,
    sport : Sport,
    location : Text,
    description : Text,
  ) : async Nat {
    let id = venueIdCounter;
    venueIdCounter += 1;

    let newVenue : Venue = {
      id;
      name;
      sport;
      location;
      description;
    };
    venues.add(id, newVenue);
    id;
  };

  // Query Functions
  public query ({ caller }) func getEvents() : async [Event] {
    events.values().toArray();
  };

  public query ({ caller }) func getAnnouncements() : async [Announcement] {
    announcements.values().toArray();
  };

  public query ({ caller }) func getVenues() : async [Venue] {
    venues.values().toArray();
  };

  public query ({ caller }) func getEventsBySport(sport : Sport) : async [Event] {
    events.values().toArray().filter(func(e) { e.sport == sport });
  };

  public query ({ caller }) func getUpcomingEvents() : async [Event] {
    events.values().toArray().filter(func(e) { e.status == #upcoming }).sort(Event.compareByDate);
  };
};
