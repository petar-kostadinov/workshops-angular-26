import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgoPosted',
})
export class TimeAgoPostedPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();

    if (isNaN(date.getTime())) {
      return value.toString();
    }

    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMin = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMin / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMounths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMounths / 12);

    if (diffInSeconds < 60) return 'just now';

    if (diffInMin < 60) return `${diffInMin} minutes ago`;

    if (diffInHours < 24) return `${diffInHours} hours ago`;

    if (diffInDays < 7) return `${diffInDays} days ago`;

    if (diffInWeeks < 4) return `${diffInWeeks} weeks ago`;

    return `${diffInYears} years ago`;
  }
}
