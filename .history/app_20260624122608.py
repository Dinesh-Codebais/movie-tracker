from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)
def create_database():

    conn = sqlite3.connect("movies.db")

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        rating REAL NOT NULL
    )
    """)

    conn.commit()
    conn.close()

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/movies", methods=["POST"])
def add_movie():

    @app.route("/movies")
def get_movies():

    conn = sqlite3.connect("movies.db")

    cursor = conn.cursor()

    cursor.execute(
        "SELECT title, rating FROM movies"
    )

    rows = cursor.fetchall()

    conn.close()

    movies = []

    for row in rows:

        movies.append({
            "title": row[0],
            "rating": row[1]
        })

    return jsonify(movies)

    data = request.get_json()

    title = data["title"]
    rating = data["rating"]

    conn = sqlite3.connect("movies.db")

    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO movies (title, rating) VALUES (?, ?)",
        (title, rating)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Movie added successfully"
    })

if __name__ == "__main__":
    create_database()
    app.run(debug=True)
