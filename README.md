# Ionic 3 App
Simple Ionic 3 App for the OKR study.

## Description
That requests the actual football competitions from current year with the teams and current players.

### Prerequisites

The API-KEY can be get on the owner's API site (above) and it's need to be configured in that location:

```
app/config/api.token.ts
```

An inside it:

```
    export class Token {
        public static key = "YOUR_KEY";
    }
```
## Built With
That app consumes a web API (for user registration) from: https://github.com/HeeAlbertin/OKR-Ventron_WebApi-NodeJS

Football API provided by: https://api.football-data.org