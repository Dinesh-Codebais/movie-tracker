from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('movies.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        )
    ''')

    conn.commit()
    conn.close()

init_db()


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/signup')
def signup():
    return render_template('signup.html')


@app.route('/movies', methods=['POST'])
def add_movie():

    data = request.get_json()

    title = data.get('title')
    rating = data.get('rating')

    conn = sqlite3.connect('movies.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            rating REAL
        )
    ''')

    cursor.execute(
        'INSERT INTO movies (title, rating) VALUES (?, ?)',
        (title, rating)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Movie added successfully",
        "title": title,
        "rating": rating
    })


if __name__ == '__main__':
    app.run(debug=True)